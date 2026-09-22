import DevSkills from "../components/DevSkills"
import FeatureSection from "../data/FeatureSection"
import Features from "../components/Features"
export default function FeatureSectionPage() {
  return (
    <> 
     <div>
        <DevSkills />
        {FeatureSection.map((feature) => (
          <div key={feature.title}> 
          <Features feature={feature} />
          </div>
        ))}
     </div>
                 {/* gradient
              <div className="relative h-40 overflow-hidden">
  <div
    className="
      absolute inset-0
      bg-gradient-to-b
      from-blue-900
      via-blue-400
      to-white
    "
  >
  </div>
</div> */}
    </>
    
  )}