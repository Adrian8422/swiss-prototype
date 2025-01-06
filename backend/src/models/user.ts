import { DataTypes, Model, Sequelize } from "sequelize";
import { Auth } from "./auth";
import { sequelize } from "../lib/connectios/db/postgre";

export class User extends Model {
  public id!: string;
  public name!: string | null;
  public email!: string;
  public authId!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    authId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Auth,
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
  }
);
