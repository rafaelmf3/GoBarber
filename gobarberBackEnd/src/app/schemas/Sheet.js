const mongoose = require('mongoose');

const SheetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    }, // NOME DA FICHA
    work_place: {
      type: String,
    }, // OBRA
    apply_place: {
      type: String,
    }, // LOCAL DE APLICAÇÃO
    description: {
      type: String,
    }, // DESCRIÇÃO
    danfe: {
      type: String,
    }, // NUMERO DA DANFE
    supplier: {
      type: String,
    }, // FORNECEDOR
    volume: {
      type: Number,
    }, // VOLUME
    seal_condition: {
      type: String,
    }, // CONDIÇÃO DO LACRE
    transport_condition: {
      type: String,
    }, // CONDIÇÃO DE TRANSPORTE
    slump_test: {
      type: String,
    }, // TESTE SLAMP
    general_aspect: {
      type: String,
    }, // ASPECTO GERAL
    comment: {
      type: String,
    }, // OBSERVAÇÃO
    curing_time: {
      type: String,
    }, // TEMPO DE CURA
    sample: {
      type: String,
    }, // CORPO DE PROVA
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Sheet', SheetSchema);
