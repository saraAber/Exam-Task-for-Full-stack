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
    public class InsurancePolicyController : ControllerBase
    {
        private IInsurancePolicyService _insurancePolicyRepository;
        public InsurancePolicyController(IInsurancePolicyService userRepository)
        {

            _insurancePolicyRepository = userRepository;
        }

        [HttpGet]
        public IActionResult Get(int userId)
        {
           
            return Ok( _insurancePolicyRepository.Get(userId));
        }
        [HttpPost]
        public IActionResult Post(InsurancePolicyCommon input)
        {
            return Ok(_insurancePolicyRepository.Post(input));
        }
        [HttpPut]
        public IActionResult Put(int id, InsurancePolicyCommon input)
        {
            
            return Ok(_insurancePolicyRepository.Put(id, input));
        }
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            
            return Ok(_insurancePolicyRepository.Delete(id));
        }
    }
}
