import pandas as pd
# import re

df= pd.read_csv("PM.csv")

a=['தந்தை/கணவர் பெயர்','பெண்','வயது','கட்சியில் சேர்ந்த ஆண்டு','இன்றைய பணி','வர்க்கம்','கல்வித்தகுதி','மாத வருமானம்','சமூகப் பின்னணி','சிறுபான்மை','பணியாற்றும் அரங்கம்','மாற்றுத்திறனாளி','தொடரும் PM','CM to PM','லெவி']
for column_name in a:
    df[column_name] = df[column_name].replace(['Incorrect data','Yet to fill','Incorrect data ','Yet to fill ','Yet tofill','yet to fill'], '0')

df.rename(columns={"லெவி":"levi"},inplace=True)
data=pd.DataFrame(df)

def process_levi(levi):
    if '=' in levi:
        return levi.split("=")[-1]
    if '+' in levi:
        return eval(levi)
    #isdigit
    elif levi.isdigit():        
        return levi
    else:
        return None

data.to_csv("Pm editing file")
print(data.head(4690).to_string())




