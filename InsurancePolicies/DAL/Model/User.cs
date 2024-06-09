using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Model
{
    public class User
    {
        public int ID { get; set; }
        public string Name { get; set; }=   string.Empty;
        public string Email { get; set; }= string.Empty;
    }
}
