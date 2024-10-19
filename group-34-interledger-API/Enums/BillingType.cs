using System.ComponentModel.DataAnnotations;

namespace group_34_interledger_API.Enums
{
    public enum BillingType
    {
        [Display(Name = "Hourly")]
        Hourly = 0,

        [Display(Name = "Daily")]
        Daily = 1,

        [Display(Name = "Monthly")]
        Monthly = 2
    }
}
