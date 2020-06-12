# import os
# from django.conf import settings

# new_path = settings.STATIC_DIR + "/dataset/en-wordfreq.json"

# def frequency(txt): 
# 	import json 
# 	from collections import Counter 

# 	f = open(new_path,) 
# 	data = json.load(f) 

# 	data_dict={}

# 	for key, value in data.items(): 
# 		if key.startswith(txt):
# 			data_dict[key]=value

# 	words=[]
# 	#return (list(data_dict.keys())[0])
# 	for i in range(len(data_dict.keys())):
# 		words.append(list(data_dict.keys())[i])
# 	return (words)

import json 
from collections import Counter 
from django.conf import settings

en_path = settings.STATIC_DIR + "/dataset/en-wordfreq.json"
kn_path = settings.STATIC_DIR + "/dataset/kn-wordfreq.json"


class Language:
    def __init__(self):
        pass

    def english_language(self,txt): 
        f = open(en_path,) 
        data = json.load(f) 

        data_dict={}

        for key, value in data.items(): 
            if key.startswith(txt):
                data_dict[key]=value

        words=[]
        for i in range(len(data_dict.keys())):
            words.append(list(data_dict.keys())[i])
        return (words)
    
    def kannada_language(self,txt): 
        f = open(kn_path,) 
        data = json.load(f) 

        data_dict={}

        for key, value in data.items(): 
            if key.startswith(txt):
                data_dict[key]=value

        words=[]
        for i in range(len(data_dict.keys())):
            words.append(list(data_dict.keys())[i])
        return (words)
   