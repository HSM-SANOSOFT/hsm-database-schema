import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCuenta')
export class TblNoCuenta {
  @Column({ type: 'char', length: 1, nullable: false })
  CCiPlanCta?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCuenta?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiTipoCta?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CdsCuentaEditada?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCuenta?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxAlias?: string;
  @Column('text', { nullable: false })
  BSnAceptaAux?: string;
  @Column('text', { nullable: false })
  BSnTercerImporte?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtTituloDetalle?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxReservadoUsuario?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngr?: string;
  @Column('datetime', { nullable: false })
  DFiCreacion?: Date;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiUsuarioModi?: string;
  @Column('datetime', { nullable: false })
  DFuModificacion?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioInac?: string;
  @Column('datetime', { nullable: false })
  DFuInactiva?: Date;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuNivelCta?: number;
  @Column('text', { nullable: false })
  BsnAceptaDoc?: string;
  @Column('text', { nullable: false })
  BsnAceptaVenc?: string;
  @Column('text', { nullable: false })
  BsnAceptaDpto?: string;
  @Column('text', { nullable: false })
  BsnAceptaProyecto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiAlterno?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtAcreedoraDeudora?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSNFijaVariable?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CciTipoUso?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnUsoModulo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiGrupoAlternoCta?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CNoAlterno?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeCuenta?: string;
}