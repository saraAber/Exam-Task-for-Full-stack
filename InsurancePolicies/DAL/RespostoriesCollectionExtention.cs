using DAL.Intreface;
using DAL.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace DAL
{
    public static class RespostoriesCollectionExtention
    {
        public static void AddRepositories(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IUserRepository, UserRepository>();
            serviceCollection.AddScoped<IInsurancePolicyRepository, InsurancePolicyRepository>();
            serviceCollection.AddDbContext<AppDbContext>();


        }
    }
}
