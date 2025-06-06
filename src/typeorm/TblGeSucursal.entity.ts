import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeSucursal')
export class TblGeSucursal {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTelefono?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxFax?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDireccion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxEmail?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxIESS?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnMatriz?: string;
  @Column('text', { nullable: false })
  ImgSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeSucursal?: string;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsReferencia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDecimoTipoNomina?: string;
}