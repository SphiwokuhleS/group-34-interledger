import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSmartBackupTable1729381350710 implements MigrationInterface {
    name = 'CreateSmartBackupTable1729381350710'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "file_accessed" ("Id" SERIAL NOT NULL, "accessedDate" TIMESTAMP NOT NULL DEFAULT now(), "fileIdId" integer, CONSTRAINT "PK_d3ba7253aaafbe6587ee33eb1e8" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TYPE "public"."file_meta_data_filetypes_enum" AS ENUM('0', '1', '2')`);
        await queryRunner.query(`CREATE TABLE "file_meta_data" ("Id" SERIAL NOT NULL, "FileName" character varying NOT NULL, "FileUrl" character varying NOT NULL, "FileSize" integer NOT NULL, "FileTypes" "public"."file_meta_data_filetypes_enum" NOT NULL DEFAULT '2', "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "CreatedBy" integer NOT NULL, CONSTRAINT "PK_5420bd36e73b823787b6e1f4bb6" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_billingtype_enum" AS ENUM('0', '1', '2', '3')`);
        await queryRunner.query(`CREATE TABLE "user" ("Id" SERIAL NOT NULL, "FirstName" character varying NOT NULL, "LastName" character varying NOT NULL, "Email" character varying NOT NULL, "BillingType" "public"."user_billingtype_enum" NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1e4be10b13490bd87f4cc30c142" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`ALTER TABLE "file_accessed" ADD CONSTRAINT "FK_8990aca4a9eda49a10e1395a2c2" FOREIGN KEY ("fileIdId") REFERENCES "file_meta_data"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "file_accessed" DROP CONSTRAINT "FK_8990aca4a9eda49a10e1395a2c2"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_billingtype_enum"`);
        await queryRunner.query(`DROP TABLE "file_meta_data"`);
        await queryRunner.query(`DROP TYPE "public"."file_meta_data_filetypes_enum"`);
        await queryRunner.query(`DROP TABLE "file_accessed"`);
    }

}
