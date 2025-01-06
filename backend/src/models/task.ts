import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/connectios/db/postgre";

export class Task extends Model {
  public id!: string;
  public title!: string;
  public description!: string;
  public status!: "pendiente" | "en progreso" | "completada";
  public dueDate!: string;
  public userId!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("pendiente", "en progreso", "completada"),
      allowNull: false,
      defaultValue: "pendiente",
    },
    dueDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Task",
    tableName: "tasks",
    timestamps: true,
  }
);
