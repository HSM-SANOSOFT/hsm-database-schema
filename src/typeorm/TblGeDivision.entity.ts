import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDivision')
export class TblGeDivision {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeDivision?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: Date;
}