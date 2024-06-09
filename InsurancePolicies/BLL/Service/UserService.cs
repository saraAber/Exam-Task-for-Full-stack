using AutoMapper;
using BLL.Intreface;
using Common;
using DAL.Intreface;
using DAL.Model;


namespace BLL.Service
{
    internal class UserService:IUserService
    {

        private readonly IUserRepository _IUserRepository;
        private readonly IMapper _mapper;


        public UserService(IUserRepository IUserRepository, IMapper mapper)
        {
            this._IUserRepository = IUserRepository;
            this._mapper = mapper;
        }
        public bool Delete(int id)
        {
            return this._IUserRepository.Delete(id);
        }

        public List<UserCommon> Get()
        {
            return _mapper.Map<List<UserCommon>>(this._IUserRepository.Get());
        }

        public UserCommon Post(UserCommon body)
        {
            User User = _mapper.Map<User>(body);
            return _mapper.Map<UserCommon>(this._IUserRepository.Post(User));
        }

        public UserCommon Put(int id, UserCommon body)
        {
            User insurance = _mapper.Map<User>(body);
            return _mapper.Map<UserCommon>(this._IUserRepository.Put(id,insurance));
        }
    }
}
