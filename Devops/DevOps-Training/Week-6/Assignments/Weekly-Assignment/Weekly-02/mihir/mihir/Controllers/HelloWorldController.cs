using Microsoft.AspNetCore.Mvc;

namespace mihir.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HelloWorldController : ControllerBase
    {
        [HttpGet]
        public IActionResult dotnetDemo()
        {
            return Ok("Hello World!");
        }
    }
}
