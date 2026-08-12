import AdditionalResources from "./AdditionalResources";
import BIMGallery from "./BIMGallery";
import CompanyOverview from "./CompanyOverview";
import LocalDistribution from "./LocalDistribution";
import PavingAdvantage from "./PavingAdvantage";
import ResultMap from "./ResultMap";


export default function PavingAdvantages() {
    return (

        <div>
            <PavingAdvantage />
            <LocalDistribution />
            {/* <ResultMap/> */}
            {/* <CompanyOverview/> */}
            <AdditionalResources />
        </div>
    );
}