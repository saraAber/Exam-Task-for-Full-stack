using DAL.Intreface;
using DAL.Model;


namespace DAL.Repository
{
    public class InsurancePolicyRepository : IInsurancePolicyRepository
    {
        readonly AppDbContext _appDbContext;
        public InsurancePolicyRepository(AppDbContext appDb)
        {
            _appDbContext = appDb;
        }



        public List<InsurancePolicy> Get(int userId)
        {
            return _appDbContext.InsurancePolicy.Where(x=>x.UserID==userId).ToList();
        }

        public InsurancePolicy Post(InsurancePolicy insurancePolicy)
        {
            _appDbContext.InsurancePolicy.Add(insurancePolicy);
            _appDbContext.SaveChanges();
            return insurancePolicy;
        }

        public InsurancePolicy Put(int id, InsurancePolicy body)
        {
            InsurancePolicy find = _appDbContext.InsurancePolicy.FirstOrDefault(x => x.Id == id);
            if (find != null)
            {
                find.PolicyNumber = body.PolicyNumber;
                find.StartDate = body.StartDate;
                find.EndDate = body.EndDate;
                find.InsuranceAmount = body.InsuranceAmount;
                _appDbContext.SaveChanges();
            }
            return find;
        }
        public bool Delete(int id)
        {
            try
            {
                InsurancePolicy find = _appDbContext.InsurancePolicy.FirstOrDefault(x => x.Id == id);
                if (find != null)
                {
                   
                    _appDbContext.InsurancePolicy.Remove(find);
                    _appDbContext.SaveChanges();
                }
                return true;
            }
            catch
            {
                return false;
            }
        }

    }
}
