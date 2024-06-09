using AutoMapper;
using Common;
using DAL.Model;

namespace BLL
{
    public class MapProfile : Profile
    {

        public MapProfile()
        {
            CreateMap<User, UserCommon>().ReverseMap();
            CreateMap<InsurancePolicy,InsurancePolicyCommon>();

        }
    }
}
