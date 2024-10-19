using Microsoft.AspNetCore.Identity;
using group_34_interledger_API.Enums;

namespace group_34_interledger_API.Models
{
    public class ApplicationUser : Microsoft.AspNetCore.Identity.IdentityUser
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public BillingType BillingType { get; set; }
        public string WalletAddress { get; set; }
    }
}

