using DAL.Intreface;
using DAL.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Common;
using BLL.Intreface;

namespace InsurancePolicies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase

    {
        private readonly IUserService _userRepository;
        public UserController(IUserService userRepository)
        {
            _userRepository = userRepository;
        }
        [HttpGet]
        public IActionResult Get()
        {

            return Ok(_userRepository.Get());
        }
        [HttpPost]
        public IActionResult Post(UserCommon user)
        {

            return Ok(_userRepository.Post(user));
        }
        [HttpPut]
        public IActionResult Put(int id, UserCommon user)
        {

            return Ok(_userRepository.Put(id, user));
        }
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            if (_userRepository.Delete(id))
            {
                return Ok(true);
            }
            return BadRequest();
        }
    }
}
