using Common;


namespace BLL.Intreface
{
    public interface IInsurancePolicyService
    {
        List<InsurancePolicyCommon> Get(int userId);
        InsurancePolicyCommon Post(InsurancePolicyCommon id);
        InsurancePolicyCommon Put(int id, InsurancePolicyCommon body);
        bool Delete(int id);
    }
}
