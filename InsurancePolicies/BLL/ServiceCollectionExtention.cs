using BLL.Intreface;
using BLL.Service;
using DAL;
using DAL.Repository;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
namespace BLL
{
    public static class ServiceCollectionExtention
    {
        public static void AddServices(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddAutoMapper(config => config.AddProfile<MapProfile>());
            serviceCollection.AddScoped<IUserService, UserService>();
            serviceCollection.AddScoped<IInsurancePolicyService, InsurancePolicyService>();
            serviceCollection.AddRepositories();

        }
    }
}
