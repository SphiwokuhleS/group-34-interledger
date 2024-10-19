using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace group34interledgerAPI.Migrations
{
    /// <inheritdoc />
    public partial class WalletAddress : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BillingType",
                schema: "SmartBackup",
                table: "AspNetUsers",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "WalletAddress",
                schema: "SmartBackup",
                table: "AspNetUsers",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BillingType",
                schema: "SmartBackup",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "WalletAddress",
                schema: "SmartBackup",
                table: "AspNetUsers");
        }
    }
}
