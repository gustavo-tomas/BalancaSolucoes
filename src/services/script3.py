import json
import os

print('CHEGOU AQUI')

with open(os.path.join(os.path.dirname(__file__), 'countries.json')) as json_data:
	for entry in json_data:
		print(entry)
