using DAL.Model;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class AppDbContext: DbContext
    {
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<InsurancePolicy> InsurancePolicy { get; set; }

        public AppDbContext():base()
        {

        }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlite(@"Data Source=..\\..\\..\\SQLite\\test.db");
            }
        }
    }
}
