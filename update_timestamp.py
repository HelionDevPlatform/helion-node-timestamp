# Write out the current datetime to a file 'timestamp.txt'

import datetime
import os

username = os.environ["USER"]
timestamp = datetime.datetime.now()
datetime_format = '%Y%m%d-%H%M%S'
formatted_time = timestamp.strftime(datetime_format)
stamp = formatted_time + '-' + username
print stamp

f = open('timestamp.txt', 'w')
f.write(stamp)
f.close()
