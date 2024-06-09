using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Common
{
    public class InsurancePolicyCommon
    {
        public int Id { get; set; }

        public string PolicyNumber { get; set; } = string.Empty;
        public int InsuranceAmount { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int UserID { get; set; }

    }
}
