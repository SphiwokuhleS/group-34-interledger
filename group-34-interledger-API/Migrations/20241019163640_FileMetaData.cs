using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace group34interledgerAPI.Migrations
{
    /// <inheritdoc />
    public partial class FileMetaData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FileMetaDatas",
                schema: "SmartBackup",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    FileName = table.Column<string>(type: "text", nullable: false),
                    FileSize = table.Column<double>(type: "double precision", nullable: false),
                    FileTypes = table.Column<int>(type: "integer", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatedBy = table.Column<string>(type: "text", nullable: true),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FileMetaDatas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FileAccesseds",
                schema: "SmartBackup",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    FileMetaDataId = table.Column<int>(type: "integer", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatedBy = table.Column<string>(type: "text", nullable: true),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FileAccesseds", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FileAccesseds_FileMetaDatas_FileMetaDataId",
                        column: x => x.FileMetaDataId,
                        principalSchema: "SmartBackup",
                        principalTable: "FileMetaDatas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FileAccesseds_FileMetaDataId",
                schema: "SmartBackup",
                table: "FileAccesseds",
                column: "FileMetaDataId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FileAccesseds",
                schema: "SmartBackup");

            migrationBuilder.DropTable(
                name: "FileMetaDatas",
                schema: "SmartBackup");
        }
    }
}
