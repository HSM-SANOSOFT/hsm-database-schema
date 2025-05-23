import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoTransfContabilizacion')
export class TblNoTransfContabilizacion {
  @PrimaryColumn('int', { nullable: false })
  NIdNoTransferencia?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuRegistro?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoComprobante?: string;
  @Column('int', { nullable: false })
  NNuAsiento?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiPlanCta?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCuenta?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoAuxiliar?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiAuxiliar?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDpto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProyecto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubProyecto?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDebito?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtCredito?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDetalle?: string;
  @Column('int', { nullable: false })
  NidNoContrato?: number;
}