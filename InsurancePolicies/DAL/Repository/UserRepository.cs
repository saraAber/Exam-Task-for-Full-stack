using DAL.Intreface;
using DAL.Model;

namespace DAL.Repository
{
    public class UserRepository : IUserRepository
    {
        readonly AppDbContext _appDbContext;
        public UserRepository(AppDbContext appDb)
        {
            _appDbContext = appDb;
        }
        public List<User> Get()
        {
            return _appDbContext.User.ToList();
        }

        public User Post(User user)
        {
            _appDbContext.User.Add(user);
            _appDbContext.SaveChanges();
            return user;
        }

        public User Put(int id, User body)
        {
            User find = _appDbContext.User.FirstOrDefault(x => x.ID == id);
            if (find != null)
            {
                find.Name = body.Name;
                find.Email = body.Email;
                _appDbContext.SaveChanges();
            }
            return find;
        }

        public bool Delete(int id)
        {
            try
            {
                User find = _appDbContext.User.FirstOrDefault(x => x.ID == id);
                if (find != null)
                {
                    //have to chek if wont delte or cahnge active
                    _appDbContext.InsurancePolicy.RemoveRange(_appDbContext.InsurancePolicy.Where(x=>x.UserID==id));
                    _appDbContext.User.Remove(find);
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
