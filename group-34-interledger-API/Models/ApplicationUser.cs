using Microsoft.AspNetCore.Identity;

namespace group_34_interledger_API.Models
{
    public class ApplicationUser : Microsoft.AspNetCore.Identity.IdentityUser
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
    }
}

