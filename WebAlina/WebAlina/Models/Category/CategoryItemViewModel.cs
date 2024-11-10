namespace WebAlina.Models.Category
{
    public class CategoryItemViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = String.Empty;
        public IFormFile? ImageFile { get; set; }
        public string? Description { get; set; }
    }
}
