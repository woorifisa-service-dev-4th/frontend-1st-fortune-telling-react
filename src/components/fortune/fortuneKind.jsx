import React from 'react'

export const fortuneKind = () => {
  return (
    <form>
    <label> 운세 종류 </label>
            <div class = "calendar-selection">
                <input type="radio" name="luck" value="운세" id="solar" checked></input>
                <label for="solar">운세</label>
                
                <input type="radio" name="luck" value="건강운" id="lunar"></input>
                <label for="lunar">건강운</label>
                
                <input type="radio" name="luck" value="금전운" id="lunar-leap"></input>
                <label for="lunar-leap">금전운</label>
            </div>
    </form>
  )
}


export default fortuneKind