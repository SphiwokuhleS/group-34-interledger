namespace group_34_interledger_API.Models
{
    public class ApplicationUser : IdentityUser
    {
       public string? FirstName { get; set; }
        public string? LastName { get; set; }
    }
}
