import csv
from datetime import datetime

csvfile = open('old_sheet.csv', newline='')

reader = csv.reader(csvfile, delimiter=',', quotechar='"')

researcher_dict = {
    'Demi': 'demiculus',
    'Goku': 'esqarrouth',
    'Onur Erkin': 'onurerkinsucu',
    'Doruk': 'dorukbalkan',
    'Kan': 'thellimist',
    'Onur Solmaz': 'osolmaz',

}

cmc_ids = set()

for row in reader:
    cmc_link, cmc_id, timestamp, researcher, notes, result, time_spent, tldr, conclusion = row

    if researcher == 'Researcher': continue
    if not cmc_id: continue

    researcher_id = researcher_dict[researcher]

    content = '---\n'
    content += 'layout: analysis\n'
    content += 'coin: %s\n'%cmc_id
    content += 'tldr: \"%s\"\n'%(tldr)
    content += 'score: %s\n'%result

    content += 'researcher: %s\n'%(researcher_id)
    content += 'date: %s\n'%(timestamp)
    content += 'conclusion: \"%s\"\n'%repr(conclusion)[1:-1]

    content += '---\n\n'
    content += notes

    open('analyses/'+cmc_id+'-'+researcher_id+'.md', 'w').write(content)

    cmc_ids.add(cmc_id)

    # print(content)
    # print(timestamp)
    # date = datetime.fromtimestamp(int(timestamp))
    # print(date)

    # print(cmc_id, ": ", tldr)

for cmc_id in cmc_ids:

    content = ''

    content += '---\n'
    content += 'layout: coin\n'
    content += 'name: %s\n'%cmc_id.replace('-',' ').title()
    content += '---\n'

    open('coins/'+cmc_id+'.md', 'w').write(content)
