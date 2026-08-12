import AdditionalResources from "./AdditionalResources";
import BIMGallery from "./BIMGallery";
import CompanyOverview from "./CompanyOverview";
import LocalDistribution from "./LocalDistribution";
import MegaAdvantage from "./MegaAdvantage";
import ResultMap from "./ResultMap";


export default function MegaAdvantages() {
    return (

        <div>
            <MegaAdvantage />
            <LocalDistribution />
            {/* <ResultMap/> */}
            {/* <CompanyOverview/> */}
            <AdditionalResources />
        </div>
    );
}