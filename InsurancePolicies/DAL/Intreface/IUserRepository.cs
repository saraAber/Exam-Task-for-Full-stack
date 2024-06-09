using DAL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Intreface
{
    public interface IUserRepository
    {
        List<User> Get();
        User Post(User id);
        User Put(int id, User body);
        bool Delete(int id);
    }
}
