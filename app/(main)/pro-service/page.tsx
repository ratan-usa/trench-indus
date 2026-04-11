import ContractorServices from "./ContractorServices";
import OrderOptions from "./OrderOptions";
import ServiceLogistics from "./ServiceLogistics";
import ServiceOptionsGrid from "./ServiceOptionsGrid";

export default function ProService() {
    return (

        <div>
            <ContractorServices />
            <ServiceLogistics />
            <ServiceOptionsGrid/>
            <OrderOptions/>
        </div>
    );
}