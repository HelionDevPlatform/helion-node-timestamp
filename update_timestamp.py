# Write out the current datetime to a file 'timestamp.txt'

import datetime

timestamp = datetime.datetime.now()
datetime_format = '%Y-%m-%d %H:%M:%S'
formatted_time = timestamp.strftime(datetime_format)
print formatted_time

f = open('timestamp.txt', 'w')
f.write(formatted_time)
f.close()

print '# Reading section...'
f = open('timestamp.txt', 'r')
line = f.readline()

print line

print 'parsed:'
parsed_datetime = datetime.datetime.strptime(line, datetime_format)
print str(parsed_datetime)