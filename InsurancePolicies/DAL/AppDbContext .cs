using DAL.Model;
using Microsoft.Data.Sqlite;
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

                var builder = new SqliteConnectionStringBuilder("Data Source=MyDatabase.db");
                builder.DataSource = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, builder.DataSource);

                optionsBuilder.UseSqlite(builder.ToString());
            }
        }
    }
}
