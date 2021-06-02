from src.Firebase import Firebase
from src.Firebase import Firestore
from src.Firebase import Storage
from datetime import datetime, timedelta
import sys

def main():
  Firebase.init()

  lastWeek = datetime.now() - timedelta(7)
  oldDocs = Firestore.getOldDocs(lastWeek)

  for doc in oldDocs:
    # Get all recordings
    recordings = doc.reference.collection('recordings').get()

    # Delete recordings
    deletedRecordings = 0
    for recording in recordings:
      recordingDict = recording.to_dict()

      # Check if recording is locked
      if not recordingDict['lock']:
        if 'photo' in recordingDict:
          Storage.deleteFile(recordingDict['photo'])

        if 'video' in recordingDict:
          Storage.deleteFile(recordingDict['video'])

        recording.reference.delete()
        deletedRecordings += 1

    # Delete doc if no recordings left
    if len(recordings) == deletedRecordings:
      doc.reference.delete()

try:
  main()
finally:
  sys.exit(0)