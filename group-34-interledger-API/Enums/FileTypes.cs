using System.ComponentModel.DataAnnotations;

namespace group_34_interledger_API.Enums
{
    public enum FileTypes
    {
        [Display(Name = "Photo")]
        Photo = 0,

        [Display(Name = "Video")]
        Video = 1,

        [Display(Name = "Document")]
        Document = 2
    }
}
