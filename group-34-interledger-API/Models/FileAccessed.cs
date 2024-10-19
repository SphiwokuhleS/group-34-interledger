using group_34_interledger_API.Enums;

namespace group_34_interledger_API.Models
{
    public class FileAccessed : BaseDataModel
    {
        public int FileMetaDataId { get; set; }
        public FileMetaData FileMetaData { get; set; }
    }
}
