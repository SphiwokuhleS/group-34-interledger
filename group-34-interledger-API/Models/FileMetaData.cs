using group_34_interledger_API.Enums;

namespace group_34_interledger_API.Models
{
    public class FileMetaData : BaseDataModel
    {
        public string FileName { get; set; }
        public double FileSize { get; set; }
        public FileTypes FileTypes { get; set; }
        public List<FileAccessed> FileAccessedList { get; set; } = new List<FileAccessed>();
    }
}
