import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeParroquia')
export class TblGeParroquia {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiProvincia?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCanton?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiParroquia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsParroquia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiPostal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeParroquia?: string;
}