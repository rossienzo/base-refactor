import { MigrationInterface, QueryRunner } from 'typeorm';

export class Default1712269881452 implements MigrationInterface {
    name = 'Default1712269881452';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."authentications_role_enum" AS ENUM('user', 'admin', 'manager')`);
        await queryRunner.query(
            `CREATE TABLE "authentications" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(300) NOT NULL, "password" text NOT NULL, "role" "public"."authentications_role_enum" NOT NULL DEFAULT 'user', "salt" character varying(255), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid NOT NULL, CONSTRAINT "UQ_e326319d7d4e8cdc3b382288533" UNIQUE ("email"), CONSTRAINT "REL_e9a778e982665303f152c01573" UNIQUE ("user_id"), CONSTRAINT "PK_2505c0cb39a2248520f306c1447" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "cells" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "publicId" character varying(1000) NOT NULL, CONSTRAINT "UQ_0aec0b283a25eb2ecc1efd74059" UNIQUE ("publicId"), CONSTRAINT "PK_b9443df02c1a41bc03f264388c8" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TYPE "public"."users_residencedistance_enum" AS ENUM('perto', 'longe', 'muito longe')`
        );
        await queryRunner.query(
            `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(300) NOT NULL, "personal_email" character varying NOT NULL, "cpf" character varying(14) NOT NULL, "phone" character varying(15) NOT NULL, "registration" character varying(15) NOT NULL, "residenceDistance" "public"."users_residencedistance_enum" NOT NULL DEFAULT 'perto', "num_projects" integer NOT NULL, "meters" smallint NOT NULL DEFAULT '24', "active_member" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP DEFAULT now(), "cell_id" uuid NOT NULL, CONSTRAINT "UQ_0ee833bb047ccada0873b8216b1" UNIQUE ("personal_email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "UQ_21d38fd8fe8ee2025b22797a271" UNIQUE ("registration"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `ALTER TABLE "authentications" ADD CONSTRAINT "FK_e9a778e982665303f152c01573d" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "users" ADD CONSTRAINT "FK_982e8c725170ff3d72841b334c9" FOREIGN KEY ("cell_id") REFERENCES "cells"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_982e8c725170ff3d72841b334c9"`);
        await queryRunner.query(`ALTER TABLE "authentications" DROP CONSTRAINT "FK_e9a778e982665303f152c01573d"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_residencedistance_enum"`);
        await queryRunner.query(`DROP TABLE "cells"`);
        await queryRunner.query(`DROP TABLE "authentications"`);
        await queryRunner.query(`DROP TYPE "public"."authentications_role_enum"`);
    }
}
