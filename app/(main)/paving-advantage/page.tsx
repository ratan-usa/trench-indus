import AdditionalResources from "./AdditionalResources";
import BIMGallery from "./BIMGallery";
import CompanyOverview from "./CompanyOverview";
import LocalDistribution from "./LocalDistribution";
import trenchingAdvantage from "./trenchingAdvantage";
import ResultMap from "./ResultMap";


export default function trenchingAdvantages() {
    return (

        <div>
            <trenchingAdvantage />
            <LocalDistribution />
            {/* <ResultMap/> */}
            {/* <CompanyOverview/> */}
            <AdditionalResources />
        </div>
    );
}