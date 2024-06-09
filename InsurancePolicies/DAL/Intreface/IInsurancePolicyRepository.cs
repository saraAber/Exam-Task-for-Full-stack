using DAL.Model;

namespace DAL.Intreface
{
    public interface IInsurancePolicyRepository
    {

        List<InsurancePolicy> Get(int userId);
        InsurancePolicy Post(InsurancePolicy id);
        InsurancePolicy Put(int id, InsurancePolicy body);
        bool Delete(int id);

    }
}
