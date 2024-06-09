using Common;

namespace BLL.Intreface
{
    public interface IUserService
    {
        List<UserCommon> Get();
        UserCommon Post(UserCommon id);
        UserCommon Put(int id, UserCommon body);
        bool Delete(int id);
    }
}
