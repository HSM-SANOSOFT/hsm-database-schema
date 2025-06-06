import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeGrupo')
export class TblGeGrupo {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiGrupo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsGrupo?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeGrupo?: string;
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