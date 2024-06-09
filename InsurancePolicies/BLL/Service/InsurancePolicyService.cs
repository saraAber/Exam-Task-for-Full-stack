using BLL.Intreface;
using Common;
using DAL.Intreface;
using AutoMapper;
using DAL.Model;


namespace BLL.Service
{
    public class InsurancePolicyService : IInsurancePolicyService
    {
        private readonly IInsurancePolicyRepository _IInsurancePolicyRepository;
        private readonly AutoMapper.IMapper _mapper;


        public InsurancePolicyService(IInsurancePolicyRepository _InsurancePolicyRepository, AutoMapper.IMapper mapper)
        {
            this._IInsurancePolicyRepository = _InsurancePolicyRepository;
            this._mapper = mapper;
        }
        public bool Delete(int id)
        {
            return this._IInsurancePolicyRepository.Delete(id);
        }

        public List<InsurancePolicyCommon> Get(int userId)
        {
            return _mapper.Map<List<InsurancePolicyCommon>>(this._IInsurancePolicyRepository.Get(userId));
        }

        public InsurancePolicyCommon Post(InsurancePolicyCommon body)
        {
            InsurancePolicy insurance = _mapper.Map<InsurancePolicy>(body);
            return _mapper.Map<InsurancePolicyCommon>(this._IInsurancePolicyRepository.Post(insurance));
        }

        public InsurancePolicyCommon Put(int id, InsurancePolicyCommon body)
        {
            InsurancePolicy insurance = _mapper.Map<InsurancePolicy>(body);
            return _mapper.Map<InsurancePolicyCommon>(this._IInsurancePolicyRepository.Put(id,insurance));
        }
    }
}
