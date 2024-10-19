namespace group_34_interledger_API.Models
{
    public class BaseDataModel
    {
        public int Id { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public string? CreatedBy { get; set; }
        public bool IsDeleted { get; set; } = false;
    }
}
