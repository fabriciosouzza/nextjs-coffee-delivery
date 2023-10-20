import { successOrderInfo } from "@/utils/models";

interface historyDataType {
  data: successOrderInfo;
}

export default function HistoryTable(item: historyDataType) {
  const itemData = item.data;
  return (
    <section className="flex justify-between bg-base-card p-10 rounded-md">
      <span>Pedido: #{itemData.id}</span>
      <span>{`Endereço: ${itemData.attributes.address.rua}, ${itemData.attributes.address.numero} - ${itemData.attributes.address.cidade}/${itemData.attributes.address.uf}`}</span>
      <span>Valor: {itemData.attributes.total}</span>
      <span>Data: {new Date(itemData.attributes.createdAt as string).toLocaleString('pt-BR')}</span>
    </section>
  );
}
